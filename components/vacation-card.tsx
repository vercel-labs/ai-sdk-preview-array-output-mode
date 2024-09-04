"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sun,
  Cloud,
  Snowflake,
  Palmtree,
  Mountain,
  Waves,
  Trees,
  FileQuestion,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type VacationType = {
  location?: string;
  country?: string;
  climate?:
    | "tropical"
    | "arid"
    | "temperate"
    | "polar"
    | "mediterranean"
    | "subtropical"
    | "alpine"
    | "coastal"
    | "rainforest"
    | "desert";
  description?: string;
  tags?: string[];
  activities?: string[];
  photo?: string;
};

const climateConfig = {
  tropical: { icon: Palmtree, color: "text-orange-400" },
  arid: { icon: Sun, color: "text-yellow-400" },
  temperate: { icon: Cloud, color: "text-blue-400" },
  polar: { icon: Snowflake, color: "text-slate-400" },
  mediterranean: { icon: Sun, color: "text-amber-400" },
  subtropical: { icon: Palmtree, color: "text-lime-400" },
  alpine: { icon: Mountain, color: "text-indigo-400" },
  coastal: { icon: Waves, color: "text-cyan-400" },
  rainforest: { icon: Trees, color: "text-green-400" },
  desert: { icon: Sun, color: "text-orange-400" },
  pending: { icon: FileQuestion, color: "text-gray-400" },
};

export function VacationCard({
  vacation,
}: {
  vacation: VacationType | undefined;
}) {
  const { icon: ClimateIcon, color } =
    climateConfig[
      vacation?.climate && vacation?.description ? vacation.climate : "pending"
    ];

  return (
    <div className="">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="w-full max-w-md border h-[28rem] flex flex-col shadow-lg bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
          <CardHeader className="border-b bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-neutral-500 dark:text-neutral-400 transition-colors duration-200" />
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  {vacation?.country}
                </CardDescription>
              </div>
              <ClimateIcon className={`h-6 w-6 ${color}`} />
            </div>
            <CardTitle className="text-2xl font-bold mt-2 text-neutral-800 dark:text-neutral-100 transition-colors duration-200">
              {vacation?.location}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow pt-4 overflow-auto">
            <p className="mb-4 text-neutral-600 dark:text-neutral-300 transition-colors duration-200">
              {vacation?.description}
            </p>
          </CardContent>
          <CardFooter className="border-t pt-4 border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <div className="w-full">
              <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-200">
                Activities:
              </h4>
              <div className="flex flex-wrap gap-2">
                {vacation?.activities?.slice(0, 2).map((activity) => (
                  <Badge
                    key={activity}
                    variant="secondary"
                    className="text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200"
                  >
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
