import type { Preview } from "@storybook/react";
import '../src/output.css'
import React from "react";

const DisplayBackground = (Story) => {
  return <div className="bg-gray-700 fixed inset-0"><Story /></div>
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [DisplayBackground]
};

export default preview;
