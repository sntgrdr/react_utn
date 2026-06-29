import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.name, formData.email, formData.message)
    navigate('/')
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return { formData, handleSubmit, handleReset, handleChange }
}

export default useContactForm
