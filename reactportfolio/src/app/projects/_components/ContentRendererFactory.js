import { CONTENT_RENDERING_STYLE } from "../../../../config";
import PlainContentRenderer from "./PlainContentRenderer";
import ScrollSlideUpContentRenderer from "./ScrollSlideUpContentRenderer";

class ContentRendererFactory {
  createRenderer(renderingStyle) {
    switch (renderingStyle) {
      case CONTENT_RENDERING_STYLE.plain:
        return PlainContentRenderer;
      case CONTENT_RENDERING_STYLE.scrollSlideUpAnimation:
        return ScrollSlideUpContentRenderer;
      default:
        return null;
    }
  }
}

export default ContentRendererFactory;