// @ts-nocheck
import styles from "./style.css"
import React from 'react';

import { canUseDOM } from 'vtex.render-runtime';

// import iconPimenta from '../../../assets/header/menu/pimenta.svg';


export default function () {

  if (canUseDOM) {
    return (
      <>
        <div className={styles.body__heading}>
          <div className={styles.shell}>
            <div className={styles.content__heading}>
              <a href="/" className={styles.heading__logo}>
                <img src="https://tfcxxx.myvtex.com/arquivos/logo-principal.png" alt="Logo Lolita Pimenta" width="initial" />
              </a>
              <div className={styles.heading__navigation}>
                <div className={styles.body__navigation}>
                  <div className={styles.content__navigation}>
                    <ul className={styles.nav__list}>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Marca
                          <div className={styles['ico-peppery']}>
                            <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                          </div>
                        </a>
                      </li>
                      <li className={`${styles.nav__item}`} onMouseEnter={() => console.log(content__departament)}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Produtos
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                        <div className={styles.content__departament}>
                          <ul className={styles.departament__list}>
                            <li className={styles.departament__item}>
                              <a className={styles.departament__link} href="https://www.lolitapimenta.com.br/calcados">
                                CALÇADOS
                              </a>
                              <div className={styles.content__category}>
                                <ul className={styles.category__list}>
                                  <li className={styles.category__item}>
                                    <a className={styles.category__link}>
                                      ANKLE BOOT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className={styles.departament__item}>
                              <a className={styles.departament__link} href="https://www.lolitapimenta.com.br/calcados">
                                CALÇADOS
                              </a>
                              <div className={styles.content__category}>
                                <ul className={styles.category__list}>
                                  <li className={styles.category__item}>
                                    <a className={styles.category__link}>
                                      ANKLE BOOT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className={styles.departament__item}>
                              <a className={styles.departament__link} href="https://www.lolitapimenta.com.br/calcados">
                                CALÇADOS
                              </a>
                              <div className={styles.content__category}>
                                <ul className={styles.category__list}>
                                  <li className={styles.category__item}>
                                    <a className={styles.category__link}>
                                      ANKLE BOOT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className={styles.departament__item}>
                              <a className={styles.departament__link} href="https://www.lolitapimenta.com.br/calcados">
                                CALÇADOS
                              </a>
                              <div className={styles.content__category}>
                                <ul className={styles.category__list}>
                                  <li className={styles.category__item}>
                                    <a className={styles.category__link}>
                                      ANKLE BOOT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          <div className={styles.banners}>
                            <div className={styles.body__banner}>
                              <div className={styles.image__category}>
                                <a className={styles.image}>
                                  <img src="https://tfcxxx.myvtex.com/arquivos/boot.jpg" alt="boot" />
                                  <p>Boot</p>
                                </a>
                                <a className={styles.image}>
                                  <img src="https://tfcxxx.myvtex.com/arquivos/acessorio-calcados.jpg" alt="acessorio calcados" />
                                  <p>Acessório Calçado</p>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className={styles.buy__sizes}>
                            <h3 className={styles.title__buy}>Compre por tamanho</h3>
                            <div className={styles.list__sizes}>
                              <a href="/calcados/33/?map=c,specificationFilter_21" className={styles.link__size}>
                                33
                              </a>
                              <a href="/calcados/34/?map=c,specificationFilter_21" className={styles.link__size}>
                                34
                              </a>
                              <a href="/calcados/35/?map=c,specificationFilter_21" className={styles.link__size}>
                                35
                              </a>
                              <a href="/calcados/36/?map=c,specificationFilter_21" className={styles.link__size}>
                                36
                              </a>
                              <a href="/calcados/37/?map=c,specificationFilter_21" className={styles.link__size}>
                                37
                              </a>
                              <a href="/calcados/38/?map=c,specificationFilter_21" className={styles.link__size}>
                                38
                              </a>
                              <a href="/calcados/39/?map=c,specificationFilter_21" className={styles.link__size}>
                                39
                              </a>
                              <a href="/calcados/40/?map=c,specificationFilter_21" className={styles.link__size}>
                                40
                              </a>
                              <a href="/calcados/41/?map=c,specificationFilter_21" className={styles.link__size}>
                                41
                              </a>
                              <a href="/calcados/42/?map=c,specificationFilter_21" className={styles.link__size}>
                                42
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Novidades
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Lifestyle
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Outlet
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Envio Imediato
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className={styles.nav__item}>
                        <a href="/lolita-pimenta" className={styles.nav__link}>
                          Blog
                          <div class="ico-peppery">
                            <div className={styles['ico-peppery']}>
                              <svg className={styles.iconPimenta} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.077 12.151"><g id="Grupo_3866" data-name="Grupo 3866" transform="matrix(0.985, 0.174, -0.174, 0.985, -1707.977, -539.852)"><g id="Grupo_3868" data-name="Grupo 3868" transform="translate(1777.179 235.419)"><g id="Grupo_3867" data-name="Grupo 3867"><path id="Caminho_5228" data-name="Caminho 5228" d="M1792.424,241.387c.131-.164.685-.72.656-.815a6.392,6.392,0,0,0-.7.322,3.965,3.965,0,0,1-1.546.481c-4.4.515-5.009-.576-5.49-.862-.877-.523-1.749-1.485-3.8-3.744-.9-.769-2.734-1.194-3.191,1-.292,1.4,1.347,3.093,2.08,3.693,2.056,1.681,5.017,3.141,7.433,2.406A11.531,11.531,0,0,0,1792.424,241.387Z" transform="translate(-1777.58 -235.675)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><g id="Grupo_3866-2" data-name="Grupo 3866"><path id="Caminho_5229" data-name="Caminho 5229" d="M1779.1,238.047a1.025,1.025,0,0,1,.04-.574.9.9,0,0,0,.046-.528c.217.476.968-.03.968-.03s-.165-.037-.273-.294-.235-.25-.235-.25l.3-.189a.924.924,0,0,0,.378-.505.862.862,0,0,1-.385.208,2.356,2.356,0,0,0-1.1.508,1.946,1.946,0,0,0-.494,1.863c0-.132.165-.255.276-.441a1.278,1.278,0,0,0,.108-.346A.909.909,0,0,0,1779.1,238.047Z" transform="translate(-1777.567 -235.509)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path><path id="Caminho_5230" data-name="Caminho 5230" d="M1777.953,238.164a1.992,1.992,0,0,1,.41-1.779l0,0a.865.865,0,0,0-.582-.572.838.838,0,0,0-.507,0s-.2-.091-.01-.359c.877-.222,1.271.775,1.271.775v.006a.637.637,0,0,0,.852.475.744.744,0,0,0-.128-.428.149.149,0,0,1,.066.022.445.445,0,0,1,.169.228c.108.257.273.294.273.294s-.751.506-.968.03a.9.9,0,0,1-.046.528,1.024,1.024,0,0,0-.04.574.911.911,0,0,1-.375-.58,1.283,1.283,0,0,1-.107.346C1778.118,237.908,1777.957,238.032,1777.953,238.164Z" transform="translate(-1777.179 -235.419)" fill="none" stroke="#e6c6c8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"></path></g></g></g></g></svg>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.widgets__components}>
                <div className={styles.heading__search}>
                  <div className={styles.body__search}>
                    <a className={styles.open__search}>
                      <div className={styles['ico-lupa']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.001 12.001"><path id="Search" d="M11.918.49,9.073-2.355a.278.278,0,0,0-.2-.082H8.564A4.862,4.862,0,0,0,9.75-5.625,4.874,4.874,0,0,0,4.875-10.5,4.874,4.874,0,0,0,0-5.625,4.874,4.874,0,0,0,4.875-.75,4.862,4.862,0,0,0,8.062-1.936v.309a.288.288,0,0,0,.082.2L10.99,1.418a.281.281,0,0,0,.4,0l.53-.53A.281.281,0,0,0,11.918.49ZM4.875-1.875a3.749,3.749,0,0,1-3.75-3.75,3.749,3.749,0,0,1,3.75-3.75,3.749,3.749,0,0,1,3.75,3.75A3.749,3.749,0,0,1,4.875-1.875Z" transform="translate(0 10.5)" fill="#51514c"></path></svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className={styles.heading__login}>
                  <div className={styles.body__login}>
                    <a className={styles.open__login}>
                      <div className={styles['ico-login']}>
                        <svg id="ico-login" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.199 13"><g id="user" transform="translate(-3.5 -3.099)"><path id="Caminho_1115" data-name="Caminho 1115" d="M15.2,19.2V17.8A2.8,2.8,0,0,0,12.4,15H6.8A2.8,2.8,0,0,0,4,17.8v1.4" transform="translate(0 -3.601)" fill="none" stroke="#51514c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><circle id="Elipse_98" data-name="Elipse 98" cx="2.5" cy="2.5" r="2.5" transform="translate(7 3.599)" fill="none" stroke="#51514c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></circle></g></svg>
                      </div>
                    </a>
                  </div>
                </div>
                {/*  */}
                <a href="/wishlist" className={styles.heading__wishlist}>
                  <div className={styles.ico__heart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.538" height="13.054" viewBox="0 0 14.538 13.054">
                      <g id="heart" transform="translate(-16.231 0.746)">
                        <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M14.818,5.541a3.562,3.562,0,0,0-5.039,0l-.687.687-.687-.687A3.563,3.563,0,1,0,3.367,10.58l.687.687,5.039,5.039,5.039-5.039.687-.687A3.562,3.562,0,0,0,14.818,5.541Z" transform="translate(14.408 -4.497)" fill="none" stroke="#51514c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                      </g>
                    </svg>
                  </div>
                </a>
                {/*  */}
                <div className={styles.heading__cart}>
                  <div className={styles.body__cart}>
                    <a className={styles.open__cart}>
                      <div className={styles['ico-bag']}>
                        <svg id="ico-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.222 16"><g id="bag" transform="translate(-1204 -148)"><g id="Retângulo_11" data-name="Retângulo 11" transform="translate(1204 151.556)" fill="none" stroke="#51514c" stroke-width="1"><path d="M0,0H14.222a0,0,0,0,1,0,0V9.444a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z" stroke="none"></path><path d="M1,.5H13.222a.5.5,0,0,1,.5.5V9.444a2.5,2.5,0,0,1-2.5,2.5H3a2.5,2.5,0,0,1-2.5-2.5V1A.5.5,0,0,1,1,.5Z" fill="none"></path></g><g id="Caminho_1" data-name="Caminho 1" transform="translate(1206.666 148)" fill="none"><path d="M4.444,0A4.444,4.444,0,0,1,8.889,4.444H0A4.444,4.444,0,0,1,4.444,0Z" stroke="none"></path><path d="M 4.44444465637207 1.000002384185791 C 2.892825603485107 1.000002384185791 1.577522754669189 2.031329154968262 1.147998332977295 3.444442272186279 L 7.740890979766846 3.444442272186279 C 7.311366558074951 2.031329154968262 5.996064186096191 1.000002384185791 4.44444465637207 1.000002384185791 M 4.44444465637207 2.384185791015625e-06 C 6.899044513702393 2.384185791015625e-06 8.888884544372559 1.989842414855957 8.888884544372559 4.444442272186279 C 5.234224319458008 4.444442272186279 2.786244869232178 4.444442272186279 4.76837158203125e-06 4.444442272186279 C 4.76837158203125e-06 1.989842414855957 1.989844799041748 2.384185791015625e-06 4.44444465637207 2.384185791015625e-06 Z" stroke="none" fill="#51514c"></path></g></g></svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}