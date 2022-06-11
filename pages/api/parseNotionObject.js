const parseNotionObject = (object) => {

    let title = object?.properties.Name.title[0]?.plain_text;
    let description = object?.properties.Description.rich_text[0]?.plain_text;
    let link = object?.properties.Link.url;
    let image_url = object?.properties.Images.files[0]?.file?.url;
    if(image_url == undefined) image_url = object?.properties.Images.files[0]?.external?.url;
    let type = object?.properties.Type.select?.name;
    let position = object?.properties.Position?.number;
    let summary = object.properties.Summary.rich_text[0]?.plain_text

    return{title, description, link, image_url, type, position, summary};
}

export default parseNotionObject