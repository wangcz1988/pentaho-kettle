/*!
 * PENTAHO CORPORATION PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright 2017 Pentaho Corporation (Pentaho). All rights reserved.
 *
 * NOTICE: All information including source code contained herein is, and
 * remains the sole property of Pentaho and its licensors. The intellectual
 * and technical concepts contained herein are proprietary and confidential
 * to, and are trade secrets of Pentaho and may be covered by U.S. and foreign
 * patents, or patents in process, and are protected by trade secret and
 * copyright laws. The receipt or possession of this source code and/or related
 * information does not convey or imply any rights to reproduce, disclose or
 * distribute its contents, or to manufacture, use, or sell anything that it
 * may describe, in whole or in part. Any reproduction, modification, distribution,
 * or public display of this information without the express written authorization
 * from Pentaho is strictly prohibited and in violation of applicable laws and
 * international treaties. Access to the source code contained herein is strictly
 * prohibited to anyone except those individuals and entities who have executed
 * confidentiality and non-disclosure agreements or other agreements with Pentaho,
 * explicitly covering such access.
 */

/**
 * The File Open and Save Card component.
 *
 * This provides the component for the Cards for the Recents option.
 * @module components/card/card.component
 * @property {String} name The name of the Angular component.
 * @property {Object} options The JSON object containing the configurations for this component.
 */
define([
  "text!./card.html",
  "css!./card.css"
], function(cardTemplate) {
  "use strict";

  var options = {
    bindings: {
      recentFiles: '<',
      onClick: '&',
      onSelect: '&'
    },
    template: cardTemplate,
    controllerAs: "vm",
    controller: cardController
  };

  /**
   * The Card Controller.
   *
   * This provides the controller for the card component.
   */
  function cardController() {
    var vm = this;
    vm.selectFile = selectFile;
    vm.$onInit = onInit;

    /**
     * The $onInit hook of components lifecycle which is called on each controller
     * after all the controllers on an element have been constructed and had their
     * bindings initialized. We use this hook to put initialization code for our controller.
     */
    function onInit() {
    }

    /**
     * Sets the selected file and passes it to the app component
     *
     * @param {Object} file - A file object that the user clicked
     */
    function selectFile(file) {
      vm.selectedFile = file;
      vm.onSelect({selectedFile: file});
    }
  }

  return {
    name: "card",
    options: options
  };
});
