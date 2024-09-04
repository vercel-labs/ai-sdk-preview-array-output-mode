import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { InformationIcon, VercelIcon } from "./icons";
// import { InformationIcon, VercelIcon } from "./icons";

const ProjectOverview = () => {
  return (
    <motion.div
      className="w-full my-4"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 5 }}
    >
      <div className="border rounded-lg p-6 flex flex-col gap-4 text-neutral-500 text-sm dark:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900">
        <p className="flex flex-row justify-center gap-4 items-center text-neutral-900 dark:text-neutral-50">
          <VercelIcon size={16} />
          <span>+</span>
          <InformationIcon />
        </p>
        <p>
          The new output mode allows you to stream complete objects with the
          `streamObject` function.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
