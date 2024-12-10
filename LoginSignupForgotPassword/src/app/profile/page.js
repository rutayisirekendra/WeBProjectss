"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Profile() {
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", profile);
    setIsFirstTimeLogin(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {isFirstTimeLogin ? "Create Your Profile" : "Edit Your Profile"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={profile.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills (comma separated)</Label>
          <Input
            id="skills"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Job Experience</Label>
          <Textarea
            id="experience"
            name="experience"
            value={profile.experience}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resume">Upload Resume (PDF)</Label>
          <Input id="resume" name="resume" type="file" accept=".pdf" />
        </div>
        <Button type="submit">
          {isFirstTimeLogin ? "Create Profile" : "Update Profile"}
        </Button>
      </form>
    </div>
  );
}
