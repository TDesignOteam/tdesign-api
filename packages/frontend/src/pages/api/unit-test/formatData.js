export function formatToOneCategoryTest(formData) {
  const newFormData = { ...formData }
  if (formData.attribute) {
    newFormData.attribute = typeof formData.attribute === 'string'
      ? formData.attribute
      : JSON.stringify(formData.attribute)
  }
  if (formData.dom) {
    newFormData.dom = typeof formData.dom === 'string'
      ? formData.dom
      : JSON.stringify(formData.dom)
  }
  if (formData.className) {
    newFormData.className = typeof formData.className === 'string'
      ? formData.className
      : JSON.stringify(formData.className)
  }
  return newFormData
}

export function getEventTestData(eventType, formData) {
  let tmpObjectEvents = []
  let tmpArrayEvents = []
  if (eventType === 'object' && Object.keys(formData.event).length) {
    const objectEvents = []
    Object.entries(formData.event).forEach(([eventName, eventInfo]) => {
      objectEvents.push({ trigger: eventName, arguments: JSON.stringify(eventInfo.arguments) })
    })
    tmpObjectEvents = objectEvents
  }
  if (eventType === 'array' && formData.event.length) {
    tmpArrayEvents = formData.event.map(item => ({
      props: item.props ? JSON.stringify(item.props) : '',
      expect: item.expect.map((ep) => ({
        trigger: ep.trigger,
        event: JSON.stringify(ep.event),
        exist: Array.isArray(ep.exist) ? ep.exist : (ep.exist ? [ep.exist] : []),
      }))
    }))
  }
  return {
    objectEvent: tmpObjectEvents,
    arrayEvent: tmpArrayEvents,
  }
}
