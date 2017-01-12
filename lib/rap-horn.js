'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Create the audio magic
    this.audio = document.createElement('audio');
    this.audio.src = 'atom://rap-horn/lib/rap-horn.ogg';

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rap-horn:play': () => this.rapHorn()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
    };
  },

  rapHorn() {
    this.audio.currentTime = 0;
    this.audio.play();
  }

};
