export const SchemaProduct = [
    {
      property: 'id',
      label: 'ID',
      type: 'text',
      validations: [
        {
          required: true,
          minLength: 3,
          maxLength: 10,
        },
      ],
    },
    {
      property: 'name',
      label: 'Product\'s name',
      type: 'text',
      validations: [
        {
          required: true,
          minLength: 5,
          maxLength: 100,
        },
      ],
    },
    {
      property: 'description',
      label: 'Description',
      type: 'text',
      validations: [
        {
  
          required: true,
          minLength: 10,
          maxLength: 200,
        },
      ],
    },
    {
      property: 'logo',
      label: 'Logo\' URL',
      type: 'text',
      validations: [
        {
          required: true,
          regEx: /\.(jpeg|jpg|gif|png|bmp|svg|webp)$/i
        },
      ],
    },
    {
      property: 'dateRelease',
      label: 'Date release',
      type: 'date',
      validations: [
        {
          required: true
        },
      ],
    },
    {
      property: 'dateRevision',
      label: 'Date Revision',
      type: 'date',
      validations: [
        {
          required: true
        },
      ],
    },
  ];
  