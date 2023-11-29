import { CONTENT_ANIMATION_STYLE } from "../../../../config";
import ScrollSlideUpContentRenderer from "./ScrollSlideUpContentRenderer";

class ContentRendererFactory {
    createRenderer(animationStyle) {
        switch (animationStyle) {
            case CONTENT_ANIMATION_STYLE.scrollSlideUp:
                return ScrollSlideUpContentRenderer;
            default:
                return null;
        }
    }
}

export default ContentRendererFactory;