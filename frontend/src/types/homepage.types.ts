export interface Media {
    id: number;
    documentId: string;
    alternativeText: string | null;
    url: string;
}

export interface Card {
    id: number;
    isWide: boolean;
    title: string;
    description: string;
    image: Media | null;
    icon: Media;
}

export interface CardGrid {
    id: number;
    cards: Card[];
}

export interface Heading {
    id: number;
    headline: string;
    description: string;
}

export interface HomepageData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    heading: Heading;
    cardGrid: CardGrid;
}

export interface HomepageResponse {
    data: HomepageData;
    meta: Record<string, unknown>;
}
