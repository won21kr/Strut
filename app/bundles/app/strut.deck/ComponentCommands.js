 define(function() {
    var AddComponent, RemoveComponent;
    AddComponent = function(slide, component) {
      this.slide = slide;
      this.component = component;
    };
    AddComponent.prototype = {
      do: function() {
        return this.slide.__doAdd(this.component);
      },
      undo: function() {
        return this.slide.__doRemove(this.component);
      },
      name: "Add Comp"
    };
    RemoveComponent = function(slide, component) {
      this.slide = slide;
      this.component = component;
    };
    RemoveComponent.prototype = {
      "do": function() {
        return this.slide.__doRemove(this.component);
      },
      undo: function() {
        return this.slide.__doAdd(this.component);
      },
      name: "Remove Comp"
    };
    return {
      Add: AddComponent,
      Remove: RemoveComponent
    };
  });