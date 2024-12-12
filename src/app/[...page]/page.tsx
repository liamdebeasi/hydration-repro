"use client";
import { BuilderComponent } from "@builder.io/react";

export default function Page() {
  return (
    <BuilderComponent
      model="page"
      content={{
        data: {
          tsCode: "useStore({ isExpanded: true });\n",
          jsCode: "Object.assign(state, { isExpanded: true });\n",
          blocks: [
            {
              "@type": "@builder.io/sdk:Element",
              "@version": 2,
              bindings: {
                "aria-expanded": "state.isExpanded",
                tabIndex: "0",
              },
              tagName: "button",
              id: "builder-31585d9fa08b43f6ae41bd44c34ae419",
              children: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  tagName: "span",
                  id: "builder-a4ca82c606a54940a0161a8435835e18",
                  component: {
                    name: "Text",
                    options: {
                      text: "Hello World 123",
                    },
                  },
                },
              ],
            },
          ],
        },
      }}
    />
  );
}
