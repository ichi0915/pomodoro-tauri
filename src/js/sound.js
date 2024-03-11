
// TODO will be doing this when the Issue of native libs is fix, cannot use appDataDir

/*
const { invoke, appDataDir, join, TrayIcon } = window.__TAURI__.core;

// const { invoke } = window.__TAURI__.core;
// import { appDataDir, join } from '@tauri-apps/api/path';
// import { convertFileSrc } from '@tauri-apps/api/tauri';

// const appDataDirPath = await appDataDir();
// const filePath = await join(appDataDirPath, 'assets/UppermostIndependent.mp3');
// const soundUrl = convertFileSrc(filePath);
// const sound = document.getElementById('my-sound');
// const source = document.getElementById('my-source');

// source.type = 'audio/mp3';
// // source.value.src = soundUrl;
// source.src = soundUrl;
// sound.appendChild(source.value);
// sound.load();

const tray = await TrayIcon.new({ tooltip: 'awesome tray tooltip' });
tray.set_tooltip('new tooltip');

let soundDisplayEl;

window.addEventListener("DOMContentLoaded", () => {

	soundDisplayEl = document.querySelector('#my-sound');
	soundDisplayEl.textContent = "audio-test";

});
// */
