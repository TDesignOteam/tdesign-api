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
  if (formData.tnode) {
    if (formData.tnode === true) {
      newFormData.tnode = { trigger: '', dom: [] }
    } else {
      newFormData.tnode.trigger = formData.tnode.trigger
      newFormData.tnode.dom = formData.tnode.dom
        ? (Array.isArray(formData.tnode.dom) ? formData.tnode.dom : JSON.parse(formData.tnode.dom))
        : []
    }
  }
  if (formData.props) {
    newFormData.props = typeof formData.props === 'string'
      ? formData.props
      : JSON.stringify(formData.props)
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
      description: item.description,
      wrapper: item.wrapper,
      expect: item.expect.map((ep) => ({
        trigger: ep.trigger,
        event: JSON.stringify(ep.event),
        exist: Array.isArray(ep.exist) ? JSON.stringify(ep.exist) : ep.exist,
        delay: (() => {
          if (ep.delay === true) return 'true';
          if (typeof ep.delay === 'number') return String(ep.delay);
          return ep.delay;
        })(),
      }))
    }))
  }
  return {
    objectEvent: tmpObjectEvents,
    arrayEvent: tmpArrayEvents,
  }
}
