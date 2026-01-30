import { useAuth } from "@/hooks/use-auth";
import { useMyEnrollments } from "@/hooks/use-enrollments";
import { useMySessions } from "@/hooks/use-sessions";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Video, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { data: enrollments, isLoading: enrollLoading } = useMyEnrollments();
  const { data: sessions, isLoading: sessionsLoading } = useMySessions();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      window.location.href = "/api/login";
    }
  }, [authLoading, isAuthenticated]);

  if (authLoading || !user) {
    return (
      <div className="min-h-screen pt-24 container mx-auto px-4">
        <Skeleton className="h-12 w-1/3 mb-8" />
        <div className="grid md:grid-cols-3 gap-8">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/20 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-10">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">
            Namaste, {user.firstName || 'Student'}
          </h1>
          <p className="text-muted-foreground">Welcome to your personal sadhana space.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" /> Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sessionsLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                ) : sessions && sessions.length > 0 ? (
                  <div className="space-y-4">
                    {sessions.map((session) => (
                      <div key={session.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-secondary/10 rounded-lg border border-border">
                        <div className="mb-4 sm:mb-0">
                          <h4 className="font-semibold text-primary">{session.title}</h4>
                          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                            <Clock className="w-3 h-3" />
                            {format(new Date(session.startTime), "PPP 'at' p")}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Instructor: {session.instructor}</p>
                        </div>
                        {session.meetingLink ? (
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white gap-2">
                            <Video className="w-4 h-4" /> Join Class
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>Not Started</Button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground bg-muted/20 rounded-lg">
                    <p>No upcoming sessions scheduled.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* My Enrollments */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5 text-primary" /> My Enrollments
                </CardTitle>
              </CardHeader>
              <CardContent>
                {enrollLoading ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                ) : enrollments && enrollments.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {enrollments.map((enrollment) => (
                      <div key={enrollment.id} className="p-4 rounded-xl border border-border hover:border-accent transition-colors bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-accent">
                            {enrollment.status}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{enrollment.program.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {enrollment.program.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                          View Details <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-muted/20 rounded-lg">
                    <p className="mb-4 text-muted-foreground">You haven't enrolled in any programs yet.</p>
                    <Link href="/sadhana">
                      <Button>Explore Programs</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardHeader>
                <CardTitle>Daily Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic font-serif text-lg leading-relaxed opacity-90">
                  "Yoga is the journey of the self, through the self, to the self."
                </blockquote>
                <p className="text-right mt-4 text-sm font-semibold opacity-75">— The Bhagavad Gita</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Practice Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Sessions Attended</span>
                  <span className="font-bold text-xl">0</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Current Streak</span>
                  <span className="font-bold text-xl">0 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Hours</span>
                  <span className="font-bold text-xl">0h</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
