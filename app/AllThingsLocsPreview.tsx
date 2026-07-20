import AutoPlayVideo from "./AutoPlayVideo";

export default function AllThingsLocsPreview() {
  return (
    <div className="all-things-locs-preview" aria-label="All Things Locs website preview with a moving hero">
      <AutoPlayVideo src="/portfolio/all-things-locs-hero.mp4" ariaHidden />
      <div className="all-things-locs-shade" aria-hidden="true" />
      <div className="all-things-locs-nav" aria-hidden="true">
        <span className="all-things-locs-logo">THE 2TITE <b>XPERIENCE</b><small>TAÉ · OWNER &amp; THE LOC FAIRY</small></span>
        <span className="all-things-locs-links">HOME&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; SERVICES&nbsp;&nbsp;&nbsp; GALLERY&nbsp;&nbsp;&nbsp; FAQ</span>
        <span className="all-things-locs-book">BOOK NOW</span>
      </div>
      <div className="all-things-locs-copy" aria-hidden="true">
        <small>TAÉ &amp; THE DREAM TEAM · OAKLAND, CALIFORNIA</small>
        <strong>ALL THINGS LOCS</strong>
      </div>
    </div>
  );
}
