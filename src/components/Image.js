const ImageComponent = `
    {{#if image_url}}
        <img src="{{static_url}}/images/{{image_url}}" class="b-image" {{#if height}}height="{{height}}"{{/if}} {{#if width}}width="{{width}}"{{/if}}/>
    {{else}}
        <img src="{{static_url}}/images/no_image.png" class="b-image" {{#if height}}height="{{height}}"{{/if}} {{#if width}}width="{{width}}"{{/if}}/>
    {{/if}}
`
export default ImageComponent;