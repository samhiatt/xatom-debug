'use babel'
/*!
 * XAtom Debug
 * Copyright(c) 2017 Williams Medina <williams.medinaa@gmail.com>
 * MIT Licensed
 */

export function attachEventFromObject (instance: any, names: Array<string>, options) {
  names.forEach((listenerName) => {
    if (options[listenerName] && typeof options[listenerName] === 'function') {
      instance.on(listenerName, options[listenerName])
    }
  })
}
