import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "zenonian",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
         customDomain: "zenonian.com",
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
