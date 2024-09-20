"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experimental_useObject as useObject } from "ai/react";
import { vacationsSchema, vacationSchemaObject } from "@/lib/schema";
import { useState } from "react";
import { VacationCard } from "./vacation-card";
import ProjectOverview from "./project-overview";
import { motion } from "framer-motion";
import Link from "next/link";
import { GitIcon, VercelIcon } from "./icons";

export function SearchInterface() {
  const [outputMode, setOutputMode] = useState("array");
  const {
    object: contactsArray,
    submit: submitArray,
    isLoading: isLoadingArray,
  } = useObject({
    api: "/api/array",
    schema: vacationsSchema,
  });

  const {
    object: contactsObject,
    submit: submitObject,
    isLoading: isLoadingObject,
  } = useObject({
    api: "/api/object",
    schema: vacationSchemaObject,
  });

  const isLoading = isLoadingArray || isLoadingObject;

  return (
    <div className="min-h-screen bg-neutral-900 text-foreground pt-12 max-w-5xl mx-auto flex justify-center">
      <div className="px-8">
        <div className="w-full mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Tabs
                value={outputMode}
                onValueChange={setOutputMode}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="object">Object</TabsTrigger>
                  <TabsTrigger value="array">Array</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button
                onClick={() =>
                  outputMode === "array"
                    ? submitArray(null)
                    : submitObject(null)
                }
                variant={"outline"}
                type="submit"
                disabled={isLoading}
              >
                Generate
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {outputMode === "array" &&
              contactsArray &&
              contactsArray.map((vacation, i) => (
                <VacationCard key={i} vacation={vacation} />
              ))}
            {outputMode === "object" &&
              contactsObject &&
              contactsObject.contacts?.map((contact, i) => (
                <VacationCard key={i} vacation={contact} />
              ))}
            {!contactsArray && !contactsObject && <ProjectOverview />}
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-row gap-4 items-center justify-between fixed bottom-6 text-xs"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          target="_blank"
          href="https://github.com/vercel-labs/ai-sdk-preview-array-output-mode"
          className="flex flex-row gap-2 bg-black text-white items-center border px-2 py-1.5 rounded-md border-zinc-700 hover:bg-zinc-800"
        >
          <GitIcon />
          View Source Code
        </Link>

        <Link
          target="_blank"
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-preview-array-output-mode&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key%20Needed&envLink=https%3A%2F%2Fplatform.openai.com"
          className="flex flex-row gap-2 items-center px-2 py-1.5 rounded-md   bg-zinc-100 text-zinc-900 hover:bg-zinc-50"
        >
          <VercelIcon size={14} />
          Deploy with Vercel
        </Link>
      </motion.div>
    </div>
  );
}
