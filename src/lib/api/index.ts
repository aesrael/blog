export default async function loadModule() {
  if (process.env.NODE_ENV !== 'production') {
    return await import('./dev')
  } else {
    return await import('./prod')
  }
}
