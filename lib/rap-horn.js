'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  audio: document.createElement('audio'),

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Setting up default audio properties
    this.audio.src = 'atom://rap-horn/lib/rap-horn.ogg';
    this.audio.currentTime = 0;

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
    if (this.audio.currentTime > 0 && !this.audio.paused) {
      this.audio.pause();
      this.audio.currentTime = .12;
      this.audio.play();
    } else {
      this.audio.play();
    }
  }

};
