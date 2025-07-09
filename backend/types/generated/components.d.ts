import type { Schema, Struct } from "@strapi/strapi";

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: "components_shared_cards";
  info: {
    displayName: "Card";
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    image: Schema.Attribute.Media<"images">;
    isWide: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatsCardGrid extends Struct.ComponentSchema {
  collectionName: "components_stats_card_grids";
  info: {
    displayName: "CardGrid";
  };
  attributes: {
    cards: Schema.Attribute.Component<"shared.card", true>;
  };
}

export interface StatsHeading extends Struct.ComponentSchema {
  collectionName: "components_stats_headings";
  info: {
    displayName: "Heading";
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "shared.card": SharedCard;
      "stats.card-grid": StatsCardGrid;
      "stats.heading": StatsHeading;
    }
  }
}
