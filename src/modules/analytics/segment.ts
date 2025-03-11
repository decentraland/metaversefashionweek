import { isbot } from "isbot"

export interface AnalyticsWindow extends Window {
  analytics: SegmentAnalytics.AnalyticsJS
}

export function getAnalytics() {
  if (isbot(window.navigator.userAgent)) {
    return undefined
  }

  return (window as AnalyticsWindow).analytics
}
