"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloraCardProps = {
  name: string;
  description: string;
  image: string;
  imageClassName: string;
  delay: number;
};

export function FloraCard({ name, description, image, imageClassName, delay }: FloraCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
      className="ghost-border rounded-[26px] bg-[var(--color-surface-soft)] p-4 sm:p-5"
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={800}
          height={620}
          className={`${imageClassName} h-52 w-full object-cover sm:h-56`}
        />
      </div>

      <h3 className="mt-5 text-[1.55rem] leading-tight text-[var(--color-primary)]">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:rgba(35,66,42,0.88)] sm:text-base">{description}</p>
    </motion.article>
  );
}
