
export const RemixModalSubmitID = "MJ::RemixModal::new_prompt"
export const CustomZoomModalSubmitID = "MJ::OutpaintCustomZoomModal::prompt"
export const ShortenModalSubmitID = "MJ::ImagineModal::new_prompt"
export const DescribeModalSubmitID = "MJ::Picreader::Modal::PromptField"
export const PanModalSubmitID = "MJ::PanModal::prompt"

export type ModalSubmitID = typeof RemixModalSubmitID | typeof CustomZoomModalSubmitID | typeof ShortenModalSubmitID | typeof DescribeModalSubmitID | typeof PanModalSubmitID