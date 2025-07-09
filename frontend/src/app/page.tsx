"use client";

import { useHomepage } from "@/hooks/useHomepage";
import Heading from "@/components/Heading";
import Card, { Media } from "@/components/Card";
import CardGrid from "@/components/CardGrid";

export default function Homepage() {
  const { data, isLoading, error } = useHomepage();
  if (isLoading) return <p>Loading...</p>;
  if (error) console.log("error handling");
  const { heading, cardGrid } = data!.data;

  const cards = cardGrid.cards.map((el) => {
    let img: Media | null = null;
    if (el.image)
      img = { url: el.image.url, alt: el.image?.alternativeText ?? "" };

    let icon: Media | null = null;
    if (el.icon.alternativeText)
      icon = { url: el.icon.url, alt: el.icon.alternativeText };

    return (
      <Card
        key={el.id}
        title={el.title}
        description={el.description}
        isWide={el.isWide}
        image={img}
        icon={icon}
      />
    );
  });

  return (
    <main className="flex flex-col space-y-[60px]">
      <Heading headline={heading.headline} description={heading.description} />
      <CardGrid>{cards.slice(0)}</CardGrid>
    </main>
  );
}
