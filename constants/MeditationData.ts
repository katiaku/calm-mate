export interface MeditationType {
    id: number;
    title: string;
    image: string;
    audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "Beach",
        image: "beach.jpg",
        audio: "beach.mp3",
    },
    {
        id: 2,
        title: "Forest",
        image: "forest.jpg",
        audio: "forest.mp3",
    },
    {
        id: 3,
        title: "River",
        image: "river.jpg",
        audio: "river.mp3",
    },
    {
        id: 4,
        title: "Stars",
        image: "stars.jpg",
        audio: "stars.mp3",
    },
    {
        id: 5,
        title: "Tree",
        image: "tree.jpg",
        audio: "tree.mp3",
    },
    {
        id: 6,
        title: "Waterfall",
        image: "waterfall.jpg",
        audio: "waterfall.mp3",
    },
];

export const AUDIO_FILES: { [key: string]: any } = {
    "beach.mp3": require("@/assets/audio/beach.mp3"),
    "forest.mp3": require("@/assets/audio/forest.mp3"),
    "river.mp3": require("@/assets/audio/river.mp3"),
    "stars.mp3": require("@/assets/audio/stars.mp3"),
    "tree.mp3": require("@/assets/audio/tree.mp3"),
    "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};
