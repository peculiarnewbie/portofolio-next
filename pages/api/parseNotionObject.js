const parseNotionObject = (object) => {

    let title = object?.properties.Name.title[0]?.plain_text;
    let description = object?.properties.Description.rich_text[0]?.plain_text;
    let link = object?.properties.Link.url;
    let image_url = object?.properties.Images.files[0]?.file?.url;
    if(image_url == undefined) image_url = object?.properties.Images.files[0]?.external?.url;
    let images = object?.properties.Images.files
    let type = object?.properties.Type.select?.name;
    let position = object?.properties.Position?.number;
    let summary = object.properties.Summary.rich_text[0]?.plain_text
    let videoID = object.properties.VideoID.rich_text[0]?.plain_text
    let videoThumb = object?.properties.Thumbnail.files[0]?.external?.url;

    return{title, description, link, image_url, type, position, summary, videoID, videoThumb, images};
}

export default parseNotionObject