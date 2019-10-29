<template>
  <div class="Header">
    <div class="Header-item">
      <router-link :to="{ path: '/'}" class="Header-link f4 d-flex flex-items-center">
        <svg
          height="32"
          class="octicon octicon-mark-github"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </router-link>
    </div>

    <div class="Header-item Header-item--full">
      <div class="Header-item header-search">
        <SearchBox />
      </div>
      <div
        v-for="item in $themeConfig.nav"
        :key="item.link"
        class="Header-item"
      >
        <a
          v-if="item.external"
          class="Header-link"
          :href="item.link"
          :target="item.target || '_blank'"
          :rel="item.rel || 'noopener noreferrer'"
        >{{ item.text }}</a>
        <router-link
          v-else
          class="Header-link"
          :to="{ path: item.link }"
        >{{ item.text }}</router-link>
      </div>
    </div>

    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      <a
        aria-label="去体验 AR 阅读模式！"
        class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator"
        @click="onClickNotice"
        href="javascript:;"
      >
        <span class="mail-status"></span>
        <svg
          class="octicon octicon-bell"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"
          />
        </svg>
      </a>
    </div>

    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
        <summary
          class="Header-link"
          aria-label="Create new…"
          data-ga-click="Header, create new, icon:add"
          aria-haspopup="menu"
          role="button"
        >
          <svg
            class="octicon octicon-plus"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" />
          </svg>
          <span class="dropdown-caret"></span>
        </summary>
        <div class="dropdown-menu dropdown-menu-sw" role="menu">
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, create new repository"
          >New repository</a>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, import a repository"
          >Import repository</a>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, create new gist"
          >New gist</a>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, create new organization"
          >New organization</a>
          <div role="none" class="dropdown-divider"></div>
          <div class="dropdown-header">
            <span title="wencaizhang/vuepress-theme-gh-style">This repository</span>
          </div>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, create new issue"
            data-skip-pjax
          >New issue</a>
        </div>
      </details>
    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      <details class="details-overlay details-reset">
        <summary
          class="Header-link"
          aria-label="View profile and more"
          data-ga-click="Header, show menu, icon:avatar"
          aria-haspopup="menu"
          role="button"
        >
          <img
            alt="@wencaizhang"
            class="avatar"
            src="https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png"
            height="20"
            width="20"
          />
          <span class="dropdown-caret"></span>
        </summary>
        <div class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px" role="menu">
          <div class="header-nav-current-user css-truncate">
            <a
              role="menuitem"
              class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block"
              href="javascript:;"
              data-ga-click="Header, go to profile, text:Signed in as"
            >
              Signed in as
              <strong class="css-truncate-target">wencaizhang</strong>
            </a>
          </div>
          <div role="none" class="dropdown-divider"></div>

          <div
            class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1"
            data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1"
          >
            <div
              class="js-user-status-container user-status-compact rounded-1 px-2 py-1 mt-2 user-status-container-border-busy"
              data-team-hovercards-enabled
            >
              <details
                class="js-user-status-details details-reset details-overlay details-overlay-dark"
              >
                <summary
                  class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit"
                  role="menuitem"
                  data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:34718241,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:34718241,&quot;client_id&quot;:&quot;125998882.1552571381&quot;,&quot;originating_request_id&quot;:&quot;E6BD:4D3D:2E0525:419A39:5DB00D69&quot;,&quot;originating_url&quot;:&quot;https://github.com/wencaizhang/vuepress-theme-gh-style/blob/master/.gitignore&quot;,&quot;referrer&quot;:&quot;https://github.com/issues/mentioned&quot;}}"
                  data-hydro-click-hmac="3c97729c81217d0da77b0ff8642dce4873192039264292045bfbeb020bd61b61"
                >
                  <div class="d-flex">
                    <div
                      class="f6 lh-condensed user-status-header d-inline-flex user-status-limited-availability"
                    >
                      <div
                        class="user-status-emoji-container flex-shrink-0 mr-1"
                        style="margin-top: 2px;"
                      >
                        <div>
                          <div
                            class="g-emoji"
                            alias="dart"
                            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                          >🎯</div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="css-truncate css-truncate-target user-status-message-wrapper f6"
                      style="line-height: 20px;"
                    >
                      <div class="d-inline-block text-gray-dark v-align-text-top text-left">
                        <div class="ws-normal text-gray-dark text-bold f6"></div>
                        <span>
                          <div
                            class="g-emoji"
                            alias="beer"
                            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f37a.png"
                          >🍺</div>Code and Beer
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>
                <div
                  class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay"
                  role="dialog"
                  tabindex="-1"
                  aria-modal="true"
                >
                  <!-- '"` -->
                  <!-- </textarea></xmp> -->
                  <form
                    class="position-relative flex-auto js-user-status-form"
                    action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1"
                    accept-charset="UTF-8"
                    method="post"
                  >
                    <input name="utf8" type="hidden" value="✓" />
                    <input type="hidden" name="_method" value="put" />
                    <input
                      type="hidden"
                      name="authenticity_token"
                      value="NFJ7RXO2zsvB6kR28OhuzSp26Jo3RT/w7KtnTmUPMKfwLbbCW2IDSX9qYHBHJoGJyOumhFa6kY5QadQZzNQ+Ow=="
                    />
                    <div class="Box-header bg-gray border-bottom p-3">
                      <button
                        class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right"
                        type="reset"
                        aria-label="Close dialog"
                        data-close-dialog
                      >
                        <svg
                          class="octicon octicon-x"
                          viewBox="0 0 12 16"
                          version="1.1"
                          width="12"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                          />
                        </svg>
                      </button>
                      <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
                    </div>
                    <input
                      type="hidden"
                      name="emoji"
                      class="js-user-status-emoji-field"
                      value=":dart:"
                    />
                    <input
                      type="hidden"
                      name="organization_id"
                      class="js-user-status-org-id-field"
                      value
                    />
                    <div class="px-3 py-2 text-gray-dark">
                      <div class="js-characters-remaining-container position-relative mt-2">
                        <div class="input-group d-table form-group my-0 js-user-status-form-group">
                          <span
                            class="input-group-button d-table-cell v-align-middle"
                            style="width: 1%"
                          >
                            <button
                              type="button"
                              aria-label="Choose an emoji"
                              class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0"
                            >
                              <span class="js-user-status-original-emoji" hidden>
                                <div>
                                  <div
                                    class="g-emoji"
                                    alias="dart"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                                  >🎯</div>
                                </div>
                              </span>
                              <span class="js-user-status-custom-emoji">
                                <div>
                                  <div
                                    class="g-emoji"
                                    alias="dart"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                                  >🎯</div>
                                </div>
                              </span>
                              <span class="js-user-status-no-emoji-icon" hidden>
                                <svg
                                  class="octicon octicon-smiley"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  height="16"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </span>
                          <div
                            keys=": @"
                            data-mention-url="/autocomplete/user-suggestions"
                            data-emoji-url="/autocomplete/emoji"
                          >
                            <input
                              type="text"
                              autocomplete="off"
                              data-no-org-url="/autocomplete/user-suggestions"
                              data-org-url="/suggestions?mention_suggester=1"
                              data-maxlength="80"
                              class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                              placeholder="What's happening?"
                              name="message"
                              value="🍺  Code and Beer"
                              aria-label="What is your current status?"
                            />
                          </div>
                          <div class="error">Could not update your status, please try again.</div>
                        </div>
                        <div
                          style="margin-left: 53px"
                          class="my-1 text-small label-characters-remaining js-characters-remaining"
                          data-suffix="remaining"
                          hidden
                        >80 remaining</div>
                      </div>
                      <div class="js-user-status-emoji-picker" data-url="/users/status/emoji"></div>
                      <div
                        class="overflow-auto ml-n3 mr-n3 px-3 border-bottom"
                        style="max-height: 33vh"
                      >
                        <div
                          class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden"
                        >
                          <h4 class="f6 text-normal my-3">Suggestions:</h4>
                          <div class="mx-3 mt-2 clearfix">
                            <div class="float-left col-6">
                              <button
                                type="button"
                                value=":palm_tree:"
                                class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1"
                              >
                                <div
                                  class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji"
                                >
                                  <div
                                    alias="palm_tree"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png"
                                  >🌴</div>
                                </div>
                                <div
                                  class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left"
                                  style="border-left: 1px solid transparent"
                                >On vacation</div>
                              </button>
                              <button
                                type="button"
                                value=":face_with_thermometer:"
                                class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1"
                              >
                                <div
                                  class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji"
                                >
                                  <div
                                    alias="face_with_thermometer"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png"
                                  >🤒</div>
                                </div>
                                <div
                                  class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left"
                                  style="border-left: 1px solid transparent"
                                >Out sick</div>
                              </button>
                            </div>
                            <div class="float-left col-6">
                              <button
                                type="button"
                                value=":house:"
                                class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1"
                              >
                                <div
                                  class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji"
                                >
                                  <div
                                    alias="house"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png"
                                  >🏠</div>
                                </div>
                                <div
                                  class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left"
                                  style="border-left: 1px solid transparent"
                                >Working from home</div>
                              </button>
                              <button
                                type="button"
                                value=":dart:"
                                class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1"
                              >
                                <div
                                  class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji"
                                >
                                  <div
                                    alias="dart"
                                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                                  >🎯</div>
                                </div>
                                <div
                                  class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left"
                                  style="border-left: 1px solid transparent"
                                >Focusing</div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="user-status-limited-availability-container">
                          <div class="form-checkbox my-0">
                            <input
                              type="checkbox"
                              name="limited_availability"
                              value="1"
                              class="js-user-status-limited-availability-checkbox"
                              data-default-message="I may be slow to respond."
                              aria-describedby="limited-availability-help-text-truncate-true-compact-true"
                              id="limited-availability-truncate-true-compact-true"
                              checked
                            />
                            <label
                              class="d-block f5 text-gray-dark mb-1"
                              for="limited-availability-truncate-true-compact-true"
                            >Busy</label>
                            <p
                              class="note"
                              id="limited-availability-help-text-truncate-true-compact-true"
                            >
                              When others mention you, assign you, or request your review,
                              GitHub will let them know that you have limited availability.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="d-inline-block f5 mr-2 pt-3 pb-2">
                        <div class="d-inline-block mr-1">Clear status</div>

                        <details
                          class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2"
                        >
                          <summary
                            class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1"
                            aria-haspopup="true"
                          >
                            <div
                              class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline"
                            >Never</div>
                            <div class="dropdown-caret"></div>
                          </summary>

                          <ul
                            class="dropdown-menu dropdown-menu-se pl-0 overflow-auto"
                            style="width: 220px; max-height: 15.5em"
                          >
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item js-user-status-expire-button ws-normal"
                                title="Never"
                              >
                                <span class="d-inline-block text-bold mb-1">Never</span>
                                <div
                                  class="f6 lh-condensed"
                                >Keep this status until you clear your status or edit your status.</div>
                              </button>
                            </li>
                            <li class="dropdown-divider" role="none"></li>
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item ws-normal js-user-status-expire-button"
                                title="in 30 minutes"
                                value="2019-10-23T16:50:59+08:00"
                              >in 30 minutes</button>
                            </li>
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item ws-normal js-user-status-expire-button"
                                title="in 1 hour"
                                value="2019-10-23T17:20:59+08:00"
                              >in 1 hour</button>
                            </li>
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item ws-normal js-user-status-expire-button"
                                title="in 4 hours"
                                value="2019-10-23T20:20:59+08:00"
                              >in 4 hours</button>
                            </li>
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item ws-normal js-user-status-expire-button"
                                title="today"
                                value="2019-10-23T23:59:59+08:00"
                              >today</button>
                            </li>
                            <li>
                              <button
                                type="button"
                                class="btn-link dropdown-item ws-normal js-user-status-expire-button"
                                title="this week"
                                value="2019-10-27T23:59:59+08:00"
                              >this week</button>
                            </li>
                          </ul>
                        </details>
                        <input
                          class="js-user-status-expiration-date-input"
                          type="hidden"
                          name="expires_at"
                          value
                        />
                      </div>

                      <div class="js-user-status-org-picker" data-url="/users/status/organizations"></div>
                    </div>
                    <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
                      <button
                        type="submit"
                        class="width-full btn btn-primary mr-2 js-user-status-submit"
                      >Set status</button>
                      <button
                        type="button"
                        class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists"
                      >Clear status</button>
                    </div>
                  </form>
                </div>
              </details>
            </div>
          </div>
          <div role="none" class="dropdown-divider"></div>

          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to profile, text:your profile"
          >Your profile</a>

          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to repositories, text:your repositories"
          >Your repositories</a>

          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to projects, text:your projects"
          >Your projects</a>

          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to starred repos, text:your stars"
          >Your stars</a>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, your gists, text:your gists"
          >Your gists</a>

          <div role="none" class="dropdown-divider"></div>

          <div
            id="feature-enrollment-toggle"
            class="hide-sm hide-md feature-preview-details position-relative"
          >
            <button
              type="button"
              class="dropdown-item btn-link"
              role="menuitem"
              data-feature-preview-trigger-url="/users/wencaizhang/feature_previews"
              data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;125998882.1552571381&quot;,&quot;originating_request_id&quot;:&quot;E6BD:4D3D:2E0525:419A39:5DB00D69&quot;,&quot;originating_url&quot;:&quot;https://github.com/wencaizhang/vuepress-theme-gh-style/blob/master/.gitignore&quot;,&quot;referrer&quot;:&quot;https://github.com/issues/mentioned&quot;,&quot;user_id&quot;:34718241}}"
              data-feature-preview-close-hmac="41f0d146dc43865531c7c995deaffb023430f182c52d916f99d8b023100cdfcd"
              data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;125998882.1552571381&quot;,&quot;originating_request_id&quot;:&quot;E6BD:4D3D:2E0525:419A39:5DB00D69&quot;,&quot;originating_url&quot;:&quot;https://github.com/wencaizhang/vuepress-theme-gh-style/blob/master/.gitignore&quot;,&quot;referrer&quot;:&quot;https://github.com/issues/mentioned&quot;,&quot;user_id&quot;:34718241}}"
              data-hydro-click-hmac="e1f43c898390f6fcf169ef0347b8c25e2ee3b18e7179c873381dd9615cb2b189"
            >Feature preview</button>
          </div>

          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to help, text:help"
          >Help</a>
          <a
            role="menuitem"
            class="dropdown-item"
            href="javascript:;"
            data-ga-click="Header, go to settings, icon:settings"
          >Settings</a>

        </div>
      </details>
    </div>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  components: { SearchBox },
  methods: {
    onClickNotice() {
      window.alert("想得美 😝");
    }
  }
};
</script>
