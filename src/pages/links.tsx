import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

import LinkCard from "../components/links/LinkCard";
import SocialIconRow from "../components/links/SocialIconRow";
import { LinkEntry, EventEntry, SiteSettings } from "../types";

interface LinksPageProps {
  links: LinkEntry[];
  events: EventEntry[];
  settings: SiteSettings;
}

const readJsonItems = <T,>(filePath: string): T[] => {
  if (!fs.existsSync(filePath)) return [];

  const { items } = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return items ?? [];
};

const LinksPage = ({ links, events, settings }: LinksPageProps) => {
  return (
    <>
      <Head>
        <title>DARK MATTER - Links</title>
        <meta
          name="description"
          content="DARK MATTER official links - Music, social media, and streaming platforms"
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-16 pb-10 px-6">
          <div className="max-w-lg mx-auto text-center">
            {/* Profile Image */}
            <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white/90 shadow-lg shadow-white/5">
              <Image
                src={settings.profileImage}
                alt="DARK MATTER"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Logo instead of text */}
            <div className="flex justify-center mb-3">
              <img
                src={settings.logo}
                alt="DARK MATTER"
                className="h-14 w-auto max-w-full object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-300 mb-6">{settings.tagline}</p>

            {/* Social Media Links */}
            <SocialIconRow links={settings.socialLinks} size="lg" />
          </div>
        </section>

        {/* Links Section */}
        <section className="max-w-lg mx-auto px-6 pb-12">
          <div className="space-y-3">
            {links.map((link, index) => (
              <LinkCard
                key={`${index}-${link.title}`}
                title={link.title}
                subtitle={link.subtitle}
                url={link.url}
                image={link.image}
                priority={index === 0}
              />
            ))}
          </div>

          {/* Tour/Events Section */}
          {events.length > 0 && (
            <div className="border-t border-gray-700/50 pt-6 mt-8">
              <h2 className="text-xl font-bold text-center mb-5">
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {events.map((event, index) => (
                  <LinkCard
                    key={`${index}-${event.title}`}
                    title={event.title}
                    subtitle={event.subtitle}
                    url={event.url}
                    image={event.image}
                    fallbackEmoji="🎪"
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img
                src={settings.logo}
                alt="Logo"
                className="h-12 w-auto max-w-full object-contain"
              />
            </div>

            <div className="mb-6">
              <SocialIconRow links={settings.socialLinks} size="sm" />
            </div>

            <div className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DARK MATTER BASS MUSIC LLC. All
              rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<LinksPageProps> = async () => {
  const contentDir = path.join(process.cwd(), "content");

  const links = readJsonItems<LinkEntry>(
    path.join(contentDir, "links.json")
  ).filter((link) => link.published);

  const events = readJsonItems<EventEntry>(
    path.join(contentDir, "events.json")
  ).filter((event) => event.published);

  const settingsPath = path.join(contentDir, "settings.json");
  const settings: SiteSettings = JSON.parse(
    fs.readFileSync(settingsPath, "utf8")
  );

  return {
    props: {
      links,
      events,
      settings,
    },
  };
};

export default LinksPage;
