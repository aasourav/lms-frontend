export const ViewContent = () => {
  (window as any).fbq("track", "ViewContent");
};

export const pageView = () => {
  (window as any).fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  (window as any).fbq("track", name, options);
};
