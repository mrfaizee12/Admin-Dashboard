export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skqBqODIUonS80LPpyt8UgGkZEglTJD77MoRGPs31qYhx2gK2jlj3PVJ4WGdfHLSfL5T0uty3D4Lar7FJqx4y6pq54Ckjsxd3IRULiDGCRy8zev9eWap9WsvC1qaVbe37PII2lhN8RDYjlahYwEmNYM9ZxJeDdrb7IZIkXKseDDBSJhPugsy",
  'Missing environment variable:SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
