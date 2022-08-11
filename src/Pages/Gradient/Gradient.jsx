import "./Gradient.css";

const Gradient = () => {
  return (
    <div className="page-gradient">
      <h1>Generate a gradient color in CSS</h1>
      <div className="directions-box-gradient">
        <h3>Choose the direction</h3>
        <form className="directions-btns-gradient">
          <label htmlFor="gradient-down">
            <input
              type="radio"
              id="gradient-down"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-down"></i>
            </div>
          </label>

          <label htmlFor="gradient-down-left">
            <input
              type="radio"
              id="gradient-down-left"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-down-left" />
            </div>
          </label>

          <label htmlFor="gradient-left">
            <input
              type="radio"
              id="gradient-left"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-left" />
            </div>
          </label>
          <label htmlFor="gradient-up-left">
            <input
              type="radio"
              id="gradient-up-left"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-up-left" />
            </div>
          </label>
          <label htmlFor="gradient-up">
            <input
              type="radio"
              id="gradient-up"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-up" />
            </div>
          </label>
          <label htmlFor="gradient-up-right">
            <input
              type="radio"
              id="gradient-up-right"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-up-right" />
            </div>
          </label>
          <label htmlFor="gradient-right">
            <input
              type="radio"
              id="gradient-right"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-right" />
            </div>
          </label>
          <label htmlFor="gradient-down-right">
            <input
              type="radio"
              id="gradient-down-right"
              name="gradient-direction"
              value=""
            />
            <div>
              <i class="bi bi-arrow-down-right" />
            </div>
          </label>
        </form>
      </div>
      <div className="colors-box-gradient">
        <label htmlFor="gradient-down-right">
          <input
            type="color"
            id="gradient-down-right"
            name="gradient-direction"
            value=""
          />
          <div>
            <i class="bi bi-arrow-down-right" />
          </div>
        </label>
      </div>
    </div>
  );
};

export { Gradient };
