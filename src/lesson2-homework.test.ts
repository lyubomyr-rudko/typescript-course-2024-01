import { describe, expect, it } from "@jest/globals";
import { distance2, distance3 } from "./lesson2-homework"

describe('distance2', () => {
      it('calculates distance between two points', () => {
      expect(distance2([1,1], [4,5])).toBe(5);
      expect(distance2([0,0], [0,0])).toBe(0);
      expect(distance2([1,1], [1,2])).toBe(1);
    });
  });

  describe('distance3', () => {
    
      it('calculates distance between two points', () => {
        expect(distance3({x:1, y:1}, {x:4, y:5})).toBe(5);
        expect(distance3({x:0, y:0}, {x:0, y:0})).toBe(0);
        expect(distance3({x:1, y:1}, {x:1, y:2})).toBe(1);
      });

});
