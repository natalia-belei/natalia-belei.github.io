import { CONTENT_RENDERING_STYLE } from "../../../../config";
import ScrollSlideUpContentRenderer from "./ScrollSlideUpContentRenderer";

class ContentRendererFactory {
  createRenderer(animationStyle) {
    switch (animationStyle) {
      case CONTENT_RENDERING_STYLE.scrollSlideUpAnimation:
        return ScrollSlideUpContentRenderer;
      default:
        return null;
    }
  }
}

export default ContentRendererFactory;