// Dependencies
import { useEffect, useState } from "react"

// Interface
type LayoutNames =
  | "desktop"
  | "tablet-horizontal"
  | "tablet-vertical"
  | "mobile-horizontal"
  | "mobile-vertical"
  | "unknown"

enum LayoutNamesEnum {
  DESKTOP = "desktop",
  TABLET_HORIZONTAL = "tablet-horizontal",
  TABLET_VERTICAL = "tablet-vertical",
  MOBILE_HORIZONTAL = "mobile-horizontal",
  MOBILE_VERTICAL = "mobile-vertical",
  UNKNOWN = "unknown",
}

interface IUseResponsive {
  layoutName: LayoutNames
  isMobile: boolean
  isTablet: boolean
  isMobileVertical: boolean
  isMobileHorizontal: boolean
  isTabletVertical: boolean
  isTabletHorizontal: boolean
  isDesktop: boolean
}

/**
 * @function useResponsive():
 * @description Gets the current screen size and returns the active screen types.
 */
function useResponsive(): IUseResponsive {
  const [layoutName, setLayoutName] = useState<LayoutNames>("desktop")

  const [viewport, setViewport] = useState({
    isMobileVertical: false,
    isMobileHorizontal: false,
    isTabletVertical: false,
    isTabletHorizontal: false,
    isDesktop: false,
  })

  useEffect(() => {
    const mediaQueries = {
      mobileVertical: window.matchMedia("(max-width: 599px)"),
      mobileHorizontal: window.matchMedia(
        "(min-width: 600px) and (max-width: 767px)"
      ),
      tabletVertical: window.matchMedia(
        "(min-width: 768px) and (max-width: 1023px)"
      ),
      tabletHorizontal: window.matchMedia(
        "(min-width: 1024px) and (max-width: 1439px)"
      ),
      desktop: window.matchMedia("(min-width: 1440px)"),
    }

    const updateViewport = () => {
      setViewport({
        isMobileVertical: mediaQueries.mobileVertical.matches,
        isMobileHorizontal: mediaQueries.mobileHorizontal.matches,
        isTabletVertical: mediaQueries.tabletVertical.matches,
        isTabletHorizontal: mediaQueries.tabletHorizontal.matches,
        isDesktop: mediaQueries.desktop.matches,
      })
    }

    const handleChange = () => {
      updateViewport()
    }

    updateViewport()

    for (const query of Object.values(mediaQueries)) {
      query.addListener(handleChange)
    }

    return () => {
      for (const query of Object.values(mediaQueries)) {
        query.removeListener(handleChange)
      }
    }
  }, [])

  const getLayoutName = (): LayoutNames => {
    if (viewport.isDesktop) return "desktop"

    if (viewport.isTabletHorizontal) return "tablet-horizontal"

    if (viewport.isTabletVertical) return "tablet-vertical"

    if (viewport.isMobileHorizontal) return "mobile-horizontal"

    if (viewport.isMobileVertical) return "mobile-vertical"

    return "unknown"
  }

  useEffect(() => {
    const updateLayoutName = () => {
      const newLayoutName = getLayoutName()
      if (newLayoutName !== layoutName) {
        setLayoutName(newLayoutName)
      }
    }

    updateLayoutName()
    window.addEventListener("resize", updateLayoutName)
    return () => window.removeEventListener("resize", updateLayoutName)
  }, [layoutName])

  return <IUseResponsive>{
    layoutName: getLayoutName(),
    isMobile: viewport.isMobileHorizontal || viewport.isMobileVertical,
    ...viewport,
  }
}

export type { LayoutNames }
export { useResponsive, LayoutNamesEnum }
