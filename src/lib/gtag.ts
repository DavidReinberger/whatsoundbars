// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
    // @ts-ignore
    window?.gtag('config', 'G-F31B29ZE21', {
      page_path: url,
    });
  }
};

interface IEventProps {
  action: string;
  category: string;
  label?: string;
  value?: number | string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// @ts-ignore
export const event = ({ action, category, label, value }: IEventProps) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
    // @ts-ignore
    window?.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
