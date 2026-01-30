import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms } from "@/hooks/use-programs";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function Sadhana() {
  const { data: programs, isLoading } = usePrograms('sadhana');

  const levels = ["beginner", "intermediate", "advanced"];

  return (
    <div className="pt-20">
      <Section background="primary" className="py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Level-Based Sadhana</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Structured yoga practice designed to guide you from foundational movements to advanced mastery.
          </p>
        </motion.div>
      </Section>

      <Section>
        <Tabs defaultValue="beginner" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 p-1 rounded-full">
              {levels.map((level) => (
                <TabsTrigger 
                  key={level} 
                  value={level}
                  className="rounded-full px-8 py-3 text-base capitalize data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {level}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {levels.map((level) => (
            <TabsContent key={level} value={level} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="h-64 w-full rounded-xl" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ))
                ) : (
                  programs
                    ?.filter(p => p.level?.toLowerCase() === level)
                    .map((program) => (
                      <ProgramCard key={program.id} program={program} />
                    ))
                )}
                
                {programs?.filter(p => p.level?.toLowerCase() === level).length === 0 && !isLoading && (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    No programs currently available for this level. Please check back soon.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </div>
  );
}
