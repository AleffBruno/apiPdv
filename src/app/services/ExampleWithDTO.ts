

interface ExampleDTO {
    param1 : string,
    param2: Date,
    omitedParam : string
}

class ExampleWithDTO {
    public example({ param1, param2 }: Omit<ExampleDTO, 'omitedParam'>)  {
        let result = param1 + param2;
        return result;
    }
   
}

export default ExampleWithDTO;