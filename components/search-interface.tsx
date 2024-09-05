"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experimental_useObject as useObject } from "ai/react";
import { vacationsSchema, vacationSchemaObject } from "@/lib/schema";
import { useState } from "react";
import { VacationCard } from "./vacation-card";

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
    <div className="min-h-screen bg-neutral-900 text-foreground pt-12">
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
          <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
