import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from "next-sanity";

const config = {
  projectId: "tvd8nvwx",
  dataset: "production",
  apiVersion: "v2021-06-07",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(confing).image(source);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
})