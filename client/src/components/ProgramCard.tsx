import { Program } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users } from "lucide-react";
import { useEnroll } from "@/hooks/use-enrollments";
import { useAuth } from "@/hooks/use-auth";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const { mutate: enroll, isPending } = useEnroll();
  const { isAuthenticated } = useAuth();

  const handleEnroll = () => {
    if (!isAuthenticated) {
      window.location.href = "/api/login";
      return;
    }
    enroll(program.id);
  };

  return (
    <Card className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
      <div className="h-2 bg-gradient-to-r from-primary to-accent" />
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-secondary text-primary hover:bg-secondary/80">
            {program.level}
          </Badge>
          <span className="font-bold text-accent text-lg">{program.price}</span>
        </div>
        <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
          {program.title}
        </CardTitle>
        <p className="text-muted-foreground mt-2 line-clamp-2">{program.description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {program.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {program.format}
          </div>
        </div>
        
        <div className="space-y-2 mt-4">
          <p className="text-sm font-semibold text-foreground">Includes:</p>
          {program.features?.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t bg-secondary/10">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          onClick={handleEnroll}
          disabled={isPending}
        >
          {isPending ? "Enrolling..." : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}
