import activeWindow from 'active-win';
import { basename } from 'path';

export default class ActiveWindow {
  constructor(config = {}) {
    /**
     * @type {Object}
     */
    this.config = Object.assign(config, {});
    /**
     * @type {activeWindow.Result}
     */
    this._activeWindow = undefined;
    /**
     * @type {boolean}
     */
    this.isActive = false;
  }

  /**
   * @returns {Boolean}
   */
  async applicationIsActive() {
    const current = await this.activeWindow;
    if (!current) {
      this.isActive = false;
      return this.isActive;
    }

    const path = current.owner.path;
    const name = basename(path);
    const title = current.title;
    console.log(title);
    if (
      this.config.names.includes(name) ||
      this.config.titles.includes(title) ||
      this.config.titlesStartsWith.some(value => title.startsWith(value))
    ) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    return this.isActive;
  }

  /**
   * Get the currently active window
   * @returns {activeWindow.Result}
   */
  get activeWindow() {
    return (async () => {
      this._activeWindow = await activeWindow();
      return this._activeWindow;
    })();
  }

  /**
   * Get the path to the application owning the current window
   * @returns {string}
   */
  get applicationPath() {
    return (async () => {
      return await this.activeWindow.owner.path;
    })();
  }
}
