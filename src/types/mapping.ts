import { Story } from './types-examples';

type FieldDescriptions = {
    [key in keyof Story]: string;
};

// expects all types
const fieldDescriptions: FieldDescriptions = {
    text: "This is text",
    color: "red",
    fontSize: "11",
    id: "1",
    ownerData: "owner data",
    type: "1"
}

Object.entries(fieldDescriptions).forEach(([field, description]) => {
    console.log(`${field}: ${description}`);
})
