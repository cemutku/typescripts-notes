// typeof variable === "string" | "number" | ...
// variableName instanceof ClassName

export interface TextInterface {
    id: number;
    text: string;
    type: TextTypes;
    color: string;
    fontSize: string;
}

export class TextClass implements TextInterface {
    id: number;
    type: TextTypes;
    text: string;
    color: string;
    fontSize: string;
}

export class Poem implements TextInterface {
    id: number;
    text: string;
    type: TextTypes;
    color: string;
    fontSize: string;
    ownerData: PoetData;

    constructor() {
        this.type = TextTypes.Poetry;
    }

}

export class Story implements TextInterface {
    id: number;
    text: string;
    type: TextTypes;
    color: string;
    fontSize: string;
    ownerData: StoryData;

    constructor() {
        this.type = TextTypes.Narrative;
    }

}

export enum TextTypes {
    Poetry,
    Narrative
}

function setSize(layer: TextInterface, value: string | number) {
    if (typeof value === "number") {
        layer.fontSize = `${value}`;
    } else {
        layer.fontSize = value;
    }
}

export interface PoetData {
    poem: string;
    publistDate: Date;
}

export interface StoryData {
    writer: string;
    publistDate: Date;
}

const textClass = new TextClass();
textClass.type = TextTypes.Poetry;

if (textClass instanceof TextClass) {
    setSize(textClass, 100);
}

// Custom type guard  function isX(var): var is TyeType {}
function isPoetry(sampleText: TextInterface): sampleText is Poem {
    return sampleText.type === TextTypes.Poetry;
}

// conditional types
function setData<T extends Poem | Story>(text: T, data: T extends Poem ? PoetData : StoryData) {
    text.ownerData = data;
}

const story = new Story();
const poem = new Poem();

setData(story, {
    publistDate: new Date(),
    writer: "Test writer"
});

setData(poem, {
    publistDate: new Date(),
    poem: "Test Poem"
});