import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skLcW1a60L7MRqs3ZvhcSb4ns9xkwUYiBnHfuEFtxXL3HCp7lS7O2YwPtoUCgx7Lk6UNNdQu0I6ZiBXr9V40CZHeHBz2B1KhpsSHcBKp1K2LDiRJuu6xPYjpft2LXFOdJKuCc2Ct8miaBtgp6WmfenKjfyuwZrorM0RdA9NoMLnNdKLECp0c",
})
