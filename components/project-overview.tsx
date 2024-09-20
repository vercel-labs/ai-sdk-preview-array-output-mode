import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MasonryIcon, VercelIcon } from "./icons";

const ProjectOverview = () => {
  return (
    <motion.div className="px-4 w-full col-span-1 sm:col-span-2 md:col-span-3 md:px-0 pt-20">
      <div className="border rounded-lg p-6 flex flex-col gap-4 text-neutral-500 text-sm dark:text-neutral-400 border-neutral-700">
        <p className="flex flex-row justify-center gap-4 items-center text-neutral-50">
          <VercelIcon size={16} />
          <span>+</span>
          <MasonryIcon />
        </p>
        <p className="text-center">
          Use{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai/docs/ai-sdk-core/generating-structured-data#array"
            target="_blank"
          >
            Array Output Mode
          </Link>{" "}
          with the{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai"
            target="_blank"
          >
            AI SDK
          </Link>{" "}
          and{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-object"
            target="_blank"
          >
            useObject
          </Link>{" "}
          to stream only complete array element as they become available.
        </p>
        <p className="text-center">
          This results in a more stable UI with no layout shifts, improving the
          overall user experience.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
