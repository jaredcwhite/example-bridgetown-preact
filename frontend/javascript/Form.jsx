import { h, Fragment, render } from "preact"
import { useState, useEffect } from "preact/hooks"
import { useForm } from "react-hook-form"

const Form = () => {
  const [submitted, setSubmitted] = useState(null)
  const { register, handleSubmit, watch, errors, reset } = useForm()

  console.log("Watching example:", watch("example"))

  useEffect(() => {
    reset({})
  }, [reset])

  const onSubmit = (data) => {
    console.log(data)
    setSubmitted(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="field">
        <label class="label">Test Field</label>
        <div class="control">
          <input
            class="input"
            name="example"
            defaultValue="Default value"
            ref={register}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Required Field</label>
        <div class="control">
          <input
            class={"input " + (errors.exampleRequired ? "is-danger" : "")}
            name="exampleRequired"
            ref={register({ required: true })}
          />
        </div>
        {errors.exampleRequired && (
          <p class="help is-danger">This field is required</p>
        )}
      </div>

      <div class="field">
        <label class="label">Favorite Drink</label>
        <div class="control">
          <div class="select">
            <select name="favdrink" ref={register}>
              <option value="coffee">Coffee</option>
              <option value="tea">Tea</option>
              <option value="soda">Soda</option>
            </select>
          </div>
        </div>
      </div>

      {!submitted && (
        <p class="has-text-centered">
          <input type="submit" class="button is-success" />
        </p>
      )}

      {submitted && (
        <>
          <p class="mt-3">
            Yay! You submitted: <strong>{submitted.example}</strong> /{" "}
            <strong>{submitted.exampleRequired}</strong> /{" "}
            <strong>{submitted.favdrink}</strong>
          </p>
          <p>
            <button
              class="button is-light is-info is-small"
              onclick={() => {
                setSubmitted(null)
                reset({})
                document.getElementsByName("example")[0].focus()
              }}
            >
              Start Over
            </button>
          </p>
        </>
      )}
    </form>
  )
}

class MyPreactForm extends HTMLElement {
  connectedCallback() {
    render(<Form></Form>, this)
  }
}

window.customElements.define("my-preact-form", MyPreactForm)
