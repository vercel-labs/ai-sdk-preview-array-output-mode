"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Briefcase } from "lucide-react";

interface ContactCardProps {
  name?: string;
  email?: string;
  phone?: string;
  title?: string;
  company?: string;
}

export function ContactCard({
  name,
  email,
  phone,
  title,
  company,
}: ContactCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <Avatar className="h-14 w-14">
          <AvatarFallback>
            {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{company}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{email}</span>
        </div>
        {phone && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{phone}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

